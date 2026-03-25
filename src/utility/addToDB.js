
const getStoredApp = () =>{

    const  storedAppSTR =localStorage.getItem("appInstallList");

    if(storedAppSTR){
        const storedAppData = JSON.parse(storedAppSTR);
        return storedAppData;
    } 
    else{
        return [];
    }

} 

const addToStoredDB = (id) =>{ 

    const storedAppData =getStoredApp(); 
    if(storedAppData.includes(id)){
        alert("Already app Installed");
    } 
    else{
        storedAppData.push(id);
       const appInfo= JSON.stringify(storedAppData);
       localStorage.setItem("appInstallList",appInfo)
    }

}  


const removeToStoreDB = (id) =>{

      const storedAppData =getStoredApp(); 
    if(storedAppData.includes(id)){
        alert("Remove Successfully");
    } 
    else{
        storedAppData.pop(id);
       const appInfo= JSON.stringify(storedAppData);
       localStorage.setItem("appInstallList",appInfo)
    }

}

export {addToStoredDB, getStoredApp,removeToStoreDB }