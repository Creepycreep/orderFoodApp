import { Product, ProductList } from '../interfaces/product';

import Card from '../Card/Card';
import List from '../../view/List/List';

const FoodBlock = ({ productList }: { productList: ProductList }) => {

  return (
    <div>
      <h2 className='uppercase font-medium mb-4'>{productList.category}</h2>
      <List>
        {productList.foodList.map((item: Product) => {
          return <Card
            key={item.id}
            product={item}
          />
        })}
      </List>
    </div>
  )
}

export default FoodBlock