const storageHelper = {
    getItem: key => {
        const saved = localStorage.getItem(key);
        const parsed = JSON.parse(saved);

        return parsed || undefined;
    },
    setItem: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

export default storageHelper;
