import React, { useEffect, useState } from 'react';

const importIcon = async iconName => {
    try {
        const mod = await import(`./icons/${iconName}.jsx`);
        return mod;
    } catch (error) {
        throw new Error(`Unable to import icon: ${iconName}`);
    }
};

const Icon = React.memo(({ name, className, height, width }) => {
    const [IconComponent, setIconComponent] = useState(null);

    useEffect(() => {
        importIcon(name).then(ImportedIcon => {
            const DynamicIconComponent = props => <ImportedIcon.default {...props} />;
            DynamicIconComponent.displayName = `${name}Icon`; // Assign a display name
            setIconComponent(() => DynamicIconComponent);
        }).catch(console.error);
    }, [name]);

    return IconComponent ? (
        <IconComponent className={className} height={height} width={width} />
    ) : (
        <div style={{
            fontSize: '30px',
            animation: 'spin 2s linear infinite',
            zIndex: 5,
        }}>
            ⏳
        </div>
    );
});

Icon.displayName = 'Icon'; // Assign a display name to the main component

export default Icon;
