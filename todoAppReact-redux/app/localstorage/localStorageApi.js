export const loadStorage = ()=>{
		try{
			const persistedObj = JSON.parse(localStorage.getItem('state'));
			if(persistedObj == null){
				return undefined;
			}
			return persistedObj;
		}catch(err){
			return undefined;
		}
};

export const saveStorage =(state)=>{
	const persistedString = JSON.stringify(state);
	localStorage.setItem('state',persistedString);
}