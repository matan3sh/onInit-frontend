import React from 'react';

export const CategoryFilter = ({ onFilterByCategory, onShowAll }) => {
  return (
    <div>
      <div className='form-group text-center'>
        <div
          className='filter btn-light pointer bg-primary'
          onClick={() => onShowAll()}
        >
          All
        </div>
        <div
          className='filter btn-light pointer'
          onClick={() => onFilterByCategory('Data')}
        >
          Data
        </div>
        <div
          className='filter btn-light pointer'
          onClick={() => onFilterByCategory('Design')}
        >
          Design
        </div>
        <div
          className='filter btn-light pointer'
          onClick={() => onFilterByCategory('Programming')}
        >
          Programming{' '}
        </div>
        <div
          className='filter btn-light pointer'
          onClick={() => onFilterByCategory('Graphics')}
        >
          Graphics
        </div>
        <div
          className='filter btn-light pointer'
          onClick={() => onFilterByCategory('Economy')}
        >
          Economy
        </div>
        <div
          className='filter btn-light pointer'
          onClick={() => onFilterByCategory('Ecommerce')}
        >
          Ecommerce
        </div>
        <div
          className='filter btn-light pointer'
          onClick={() => onFilterByCategory('Consultants')}
        >
          Consultants
        </div>
        <div
          className='filter btn-light pointer'
          onClick={() => onFilterByCategory('Management')}
        >
          Management
        </div>
        <div
          className='filter btn-light pointer'
          onClick={() => onFilterByCategory('Cooking')}
        >
          Cooking
        </div>
      </div>
    </div>
  );
};
