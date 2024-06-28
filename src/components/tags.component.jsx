import { useContext } from "react";
import { EditorContext } from "../pages/editor.pages";

const Tag = ({ tag, tagIndex }) => {
    let { blog, blog: { tags }, setBlog } = useContext(EditorContext);

    const addEditable = (e) => {
        e.target.setAttribute("contentEditable", true);
        e.target.focus();
    };

    const handleTagEdit = (e) => {
        
        if (e.keyCode === 13 || e.keyCode === 188) {
            e.preventDefault();
            
            
            let currentTag = e.target.innerText.trim();

            
            tags[tagIndex] = currentTag;

            
            setBlog({ ...blog, tags });

            
            e.target.setAttribute("contentEditable", false);
        }
    };

    const handleTagDelete = () => {
       
        const newTags = tags.filter((t, index) => index !== tagIndex);
        

        setBlog({ ...blog, tags: newTags });
    };

    return (
        <div className="relative p-2 mt-2 mr-2 px-5 bg-white rounded-full inline-block hover:bg-opacity-50 pr-8">
            <p 
                className="outline-none" 
                onKeyDown={handleTagEdit}
                onClick={addEditable}
                contentEditable={false} // Ensure it's not editable initially
                suppressContentEditableWarning={true} // Suppress React warning for contentEditable
            >
                {tag}
            </p>
            <button
                className="mt-[2px] rounded-full absolute right-2 top-1/2 -translate-y-1/2"
                onClick={handleTagDelete}
            >
                <i className="fi fi-br-cross-small text-xl pointer-events-none"></i>
            </button>
        </div>
    );
};

export default Tag;
