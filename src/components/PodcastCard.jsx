import React from 'react';
import { FaPodcast } from 'react-icons/fa6';
import { BaseCard } from './LinkCard';

const PodcastCard = (props) => {
    return <BaseCard {...props} IconComponent={FaPodcast} />;
};

export default PodcastCard;