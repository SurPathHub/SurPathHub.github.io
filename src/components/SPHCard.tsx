import * as React from 'react';

interface SPHCardProps {
    title?: string;
    description?: string;
    media?: string;
    hasAction?: boolean;
}

const SPHCard: React.FC<SPHCardProps> = ({title, description, media, hasAction, children}) => {
    return (
        <div className="sph-card">

            { media ?
            <div className="sph-card__media">
                <img src={media} alt="Card Image"/>
            </div> : ''
            }

            <div className="sph-card__content">
                <h2 className="sph-card__title">{title}</h2>
                <p className="sph-card__description">{description}</p>
            </div>

            { hasAction ?
            <div className="sph-card__actions">
                {children}
            </div> : ''
            }

        </div>
    );
};

export default SPHCard;