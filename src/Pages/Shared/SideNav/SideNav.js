import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const SideNav = () => {
    const [courseCategories, setCourseCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses-categories')
            .then(res => res.json())
            .then(data => setCourseCategories(data));
    }, [])
    return (
        <div>
            <h4>All Courses Category : {courseCategories.length}</h4>
        </div>
    );
};

export default SideNav;