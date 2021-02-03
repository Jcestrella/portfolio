import React from 'react';
import { faGithub, faChrome } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MenuItems({ menuItem }) {
    return (
        <div className="Projects">
            {
                menuItem.map((item) => {
                    return <div className="project" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt="" />
                            <ul className="hover-items">
                                <li>
                                    <a href={item.link1} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faChrome} /></a>
                                    <a href={item.link2} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                                </li>
                            </ul>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        <p>{item.description}</p>
                    </div>
                })
            }
        </div>
    );
}

export default MenuItems;
