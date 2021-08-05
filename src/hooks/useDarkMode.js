import useLocalStorage from "./useLocalStorage";

const useDarkMode = (darkModePreference)=> {
    const [value, setValue] = useLocalStorage('darkModePreference')
    return [value, setValue]; 
}

export default useDarkMode;