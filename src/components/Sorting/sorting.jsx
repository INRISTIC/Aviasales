import { useSelector, useDispatch } from 'react-redux/es/exports';

import { setIsPressBtn, setSorting } from '../../store/slices/filtersSlice';

import SortingStyle from './sorting.module.scss';

const Sorting = () => {
  const dispatch = useDispatch();
  const { isPressBtn } = useSelector((state) => state.filtersData);
  const hundleClick = (event) => {
    const { name } = event.target;
    dispatch(setSorting(name));
    if (name === 'price') {
      dispatch(
        setIsPressBtn({
          btnPrice: true,
          btnFast: false,
          btnOptimal: false,
        })
      );
    }
    if (name === 'fast') {
      dispatch(setIsPressBtn({ btnPrice: false, btnFast: true, btnOptimal: false }));
    }
    if (name === 'optimal') {
      dispatch(setIsPressBtn({ btnPrice: false, btnFast: false, btnOptimal: true }));
    }
  };
  return (
    <div className={SortingStyle['sorting-block']}>
      <button
        className={`${SortingStyle['btn-1']} ${isPressBtn.btnPrice ? `${SortingStyle['selected-btn']}` : ''}`}
        onClick={hundleClick}
        type="button"
        name="price"
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        className={`${SortingStyle['btn-2']} ${isPressBtn.btnFast ? `${SortingStyle['selected-btn']}` : ''}`}
        onClick={hundleClick}
        type="button"
        name="fast"
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        className={`${SortingStyle['btn-3']} ${isPressBtn.btnOptimal ? `${SortingStyle['selected-btn']}` : ''}`}
        onClick={hundleClick}
        type="button"
        name="optimal"
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  );
};

export default Sorting;
