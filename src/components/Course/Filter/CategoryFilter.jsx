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
        <div className='form-group text-center'>
          {this.state.categories.map((category) => {
            return (
              <div
                className={`filter btn-light pointer ${
                  this.state.currCategory === category ? 'bg-primary' : ''
                }`}
                onClick={() => {
                  this.onSelect(category);
                }}
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
