import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [courseCategories, setCourseCategories] = useState([]);

    useEffect(() => {
        fetch('https://edu-boss-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourseCategories(data));
    }, [])
    return (
        <div>
            <h4>All Courses Category : {courseCategories.length}</h4>
            <div>
                {
                    courseCategories.map(courseCategory => <p key={courseCategory.id}>
                        <Link to={`/courses/${courseCategory.id}`}>{courseCategory.name}</Link>
                    </p>)
                }
            </div>
        </div >
    );
};

export default SideNav;