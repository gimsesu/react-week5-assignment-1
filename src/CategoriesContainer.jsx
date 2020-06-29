import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Categories from './Categories';

import { selectCategory } from './actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state);

  const onClick = (id) => {
    dispatch(selectCategory(id));
  };
  return <Categories categories={categories} onClick={onClick} />;
}
