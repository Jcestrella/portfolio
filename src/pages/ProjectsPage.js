import React from 'react';
import Categories from '../components/Categories';
import MenuItems from '../components/MenuItems';
import Title from '../components/Title';
import projects from '../components/AllProjects';
import { useState } from 'react';

const allCategories = ['All', ...new Set(projects.map(item => item.category))];

function ProjectsPage() {

    const [categories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(projects);

    const filter = (category) => {

        if (category === 'All') {
            setMenuItems(projects)
            return;
        }

        const filteredData = projects.filter((item) => {
            return item.category === category;
        })
        setMenuItems(filteredData);
    };

    return (
        <div className="ProjectsPage">
            <div className="title">
                <Title title={'Projects'} span={'Projects'} />
            </div>
            <div className="projects">
                <Categories filter={filter} categories={categories} />
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default ProjectsPage
