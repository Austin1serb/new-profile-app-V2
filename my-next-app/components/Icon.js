import React, { useEffect, useState } from 'react';

const iconCache = {};  // Cache object to store imported icons

const importIcon = async iconName => {
    // Check if the icon is already in the cache
    if (iconCache[iconName]) {
        return iconCache[iconName];
    }

    try {
        // Dynamically import the icon
        const module = await import(`./icons/${iconName}.jsx`);
        // Store it in the cache
        iconCache[iconName] = module;
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

    return IconComponent ? <IconComponent className={className} height={height} width={width} /> : <div>Loading...</div>;
});

export default Icon;
