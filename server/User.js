const users=[];

const addUser=( { id,name,room} )=>{
   
    name=name.trim().toLowerCase();
    room=room.trim().toLowerCase();

    const existingUser=users.find( user=>user.room ===room && user.name===name );
    if(existingUser){
        return {error:'username is taken'};
    }

    const user={id,name,room};
    users.push(user);

    return { user };

};

const removeUser=( id ) => {
    const idx=users.findIndex( (user) => user.id ===id );

    if(idx !== null){
      return  users.filter(user=> user.id !== id);
    }

};


const getUsers=(id)=>{
    return users.find( (user) => user.id ===id);
};


const getUserInRoom=( room)=>{
    return users.filter( (user)  => user.room===room );
};

module.exports = {addUser,removeUser,getUsers,getUserInRoom};









