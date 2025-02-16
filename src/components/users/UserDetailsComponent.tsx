import React from 'react';
import {IUser} from "@/models/user/IUser";

type UserDetailsComponentPropType = {
    item: IUser
}

const UserDetailsComponent = ({item}:UserDetailsComponentPropType) => {
    return (
        <div>
            <div>
                <h3>{item.firstName} {item.lastName}</h3>
                <img src={item.image} alt=""/>
                <div>
                    Вік: {item.age}
                </div>
                <div>
                    Посада: {item.role}
                </div>
                <div>
                    Дата народження: {item.birthDate}
                </div>
                <div>
                    Місце проживання: {item.address.address} {item.address.city} {item.address.country}
                </div>
            </div>
        </div>
    );
};

export default UserDetailsComponent;