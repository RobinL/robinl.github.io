import React from 'react';
import { FaPodcast } from 'react-icons/fa6';
import { BaseCard } from './LinkCard';
import { CONTENT_TYPES } from '../constants/contentTypes';

const PodcastCard = (props) => {
    return <BaseCard {...props} IconComponent={FaPodcast} />;
};

PodcastCard.contentType = CONTENT_TYPES.PODCAST;
export default PodcastCard;