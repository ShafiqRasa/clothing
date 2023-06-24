import Item from "../directory-item/dicrectory-item.component";
import { CategoriesListContainer } from "./categories-list.style";
export type categoryProps = {
  id: number;
  title: string;
  route: string;
  imageUrl: string;
};
export type categoriesProps = {
  categories: categoryProps[];
};
const Categories = ({ categories }: categoriesProps) => {
  return (
    <CategoriesListContainer>
      {categories.map((category) => (
        <Item key={category.id} {...category} />
      ))}
    </CategoriesListContainer>
  );
};

export default Categories;
