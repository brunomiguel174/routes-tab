import React from 'react';

import DropDown from '../../components/DropDown';

export default function Exercises() {
    const items = [
        "Edgar",
        "Bruno",
        "Pedro",
        "Flávio",
        "Joana",
        "Diogo",
        "Tomás",
        "Araújo",
        "Maria"
      ];
      
      const selected = "Choose...";
      
    return (
      <div>
        <DropDown
          title="Welcome to DropDown exercise"
          selected={selected}
          items={items}
        />
      </div>
    );
}