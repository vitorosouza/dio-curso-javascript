function getAdmins(map){
    let admins = [];
    for([key,value] of map){
        if(value == 'Admin'){
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luis', 'Admin');
usuarios.set('Vitor', 'Admin');
usuarios.set('Kaio', 'User');
usuarios.set('Ana', 'Admin');

console.log(getAdmins(usuarios));