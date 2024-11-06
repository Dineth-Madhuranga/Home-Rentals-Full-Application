import { categories } from "../data"
import { Link } from "react-router-dom"
import "../styles/Categories.scss"

const Categories = () => {
    return (
        <div className='categories'>
            <h1>Explore Top Categories</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, consequuntur odit vitae id ipsam
                corporis cum autem magni non dolores aut magnam repellat quaerat veniam ullam tempora vel quis aperiam.
                Maiores ullam asperiores ab. Iusto, blanditiis! Nam, odit dolor? Error deserunt ratione quaerat quia.
            </p>
            <div className="categories_list">
                {categories?.slice(1, 7).map((category, index) => (
                    <Link to={`/properties/category/${category.label}`}>
                        <div className="category" key={index}>
                            <img src={category.img} alt={category.label} />
                            <div className="overlay"></div>
                            <div className="category_text">
                                <div className="category_text_icon">{category.icon}</div>
                                <p>{category.label}</p>
                            </div>
                        </div>
                    </Link>

                ))}
            </div>
        </div>
    )
}

export default Categories