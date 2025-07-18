'use client';
import React from 'react';

const SmallNewsItem = ({ imageUrl, title, date }) => (
  <div className="flex items-center space-x-4 group">
    <img src={imageUrl} alt={title} className="w-20 h-20 object-cover rounded-md flex-shrink-0" />
    <div>
      <h4 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{title}</h4>
      <p className="text-xs text-gray-500 mt-1">{date}</p>
    </div>
  </div>
);

export default SmallNewsItem;