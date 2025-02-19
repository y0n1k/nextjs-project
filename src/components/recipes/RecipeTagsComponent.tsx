import Link from "next/link";

type RecipeTagsComponentType = {
    tags: string[]
}

const RecipeTagsComponent = ({tags}: RecipeTagsComponentType) => {
    return (
        <div>
            {
                tags.map((tag, index) => (
                    <Link href={{
                        pathname: '/recipes/',
                        query: {tag: tag}
                    }
                    } key={index}><i>#{tag} </i></Link>
                ))
            }
        </div>
    );
};

export default RecipeTagsComponent;