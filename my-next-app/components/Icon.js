'use client'
import React, { useEffect, useState } from 'react';
const importIcon = async iconName => {
    try {
        // Dynamically import the icon
        const module = await import(`./icons/${iconName}.jsx`);
        return module;
    } catch (error) {
        throw new Error(`Unable to import icon: ${iconName}`);
    }
}
const Icon = React.memo(({ name, className, height, width }) => {
    const [IconComponent, setIconComponent] = useState(null);

    useEffect(() => {
        importIcon(name).then(ImportedIcon => {
            setIconComponent(() => props => <ImportedIcon.default {...props} />);
        }).catch(console.error);
    }, [name]);

    return IconComponent ? <IconComponent className={className} height={height} width={width} /> : 
        
        <div style={{
            fontSize: '30px',
            animation: 'spin 2s linear infinite', // Applying the animation
            zIndex:5,
        }}>
            ⏳
        </div>
  
});

export default Icon;
