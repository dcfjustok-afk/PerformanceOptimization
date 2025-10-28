const ThemeContext = React.createContext('light');

const ThemeProvider = () => {
  const [theme, setTheme] = useState('light');
  const value = useMemo(() => ({ theme, setTheme }), [theme]);
//   用 useMemo 缓存对象 { theme, setTheme } 的引用。

// 原因：如果直接写 { theme, setTheme }，每次 App 渲染都会创建一个新的对象 {}，导致 Context 的 Provider 每次都认为 value 变化，从而触发所有子组件重新渲染。

// [theme] 表示：只有当 theme 改变时，才生成新的对象。
  return (
    <ThemeContext.Provider value={value}>
      <Toolbar />
    </ThemeContext.Provider>
  );
};

const Toolbar = () => {
  return <ThemeButton />; // 只用 theme，不用每次都渲染 Toolbar
};

const ThemeButton = React.memo(() => {
  const { theme } = useContext(ThemeContext);
  return <button>{theme}</button>;
});
export default ThemeProvider;