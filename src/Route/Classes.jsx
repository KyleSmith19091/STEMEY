// React
import React from 'react'

// Images
import molbio from "../Img/Photo/MolBio.png";

// CSS
import "../Style/Route/Classes.css";

const classesContent = [
    {
        name: "Molecular Biology",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam earum amet sequi, consequuntur harum explicabo facilis nobis porro. Magnam odio ducimus, porro temporibus beatae nesciunt non fugit neque corrupti exercitationem.",
        imgPath: molbio,
        emoji: "🧪"
    },
    {
        name: "Molecular Biology",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam earum amet sequi, consequuntur harum explicabo facilis nobis porro. Magnam odio ducimus, porro temporibus beatae nesciunt non fugit neque corrupti exercitationem.",
        imgPath: molbio,
        emoji: "🧪"
    },
    {
        name: "Molecular Biology",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam earum amet sequi, consequuntur harum explicabo facilis nobis porro. Magnam odio ducimus, porro temporibus beatae nesciunt non fugit neque corrupti exercitationem.",
        imgPath: molbio,
        emoji: "🧪"
    },
    {
        name: "Molecular Biology",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam earum amet sequi, consequuntur harum explicabo facilis nobis porro. Magnam odio ducimus, porro temporibus beatae nesciunt non fugit neque corrupti exercitationem.",
        imgPath: molbio,
        emoji: "🧪"
    },
];

const Classes = () => {
    return (
        <main className="classes">
            <div className="classes-container">
                {classesContent.map((cl, idx) => {
                    return (
                        <div key={idx} className="card">
                            <div className="card-img-container">
                                <img src={cl.imgPath} alt="Class" className="card-img" />
                            </div>
                            <div className="card-text-container">
                                <h3 className="card-header"><span role="img" aria-label="mountain">{cl.emoji} </span>{cl.name}</h3>
                                <p className="card-description">{cl.description}</p>
                                <button>Register</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </main>
    )
}

export default Classes
