import React from 'react';

export class CategoryFilter extends React.Component {
  state = {
    categories: [
      'All',
      'Data',
      'Design',
      'Programming',
      'Graphics',
      'Economy',
      'Ecommerce',
      'Consultants',
      'Management',
      'Cooking',
    ],
    currCategory: 'All',
  };

  onSelect = (category) => {
    this.setState(
      { currCategory: category },
      this.props.onFilterByCategory(category)
    );
  };

  render() {
    return (
      <div>
        <div className='form-group text-center filter-ctgs'>
          {this.state.categories.map((category, index) => {
            return (
              <div
                className={`filter btn-light pointer filter-ctg-btn ${
                  this.state.currCategory === category ? 'bg-primary' : ''
                }`}
                onClick={() => {
                  this.onSelect(category);
                }}
                key={index}
              >
                {category}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
