import ReactQuill from 'react-quill';

export default function Editor({value,onChange}){

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ align: [] }],
        
            [{ list: 'ordered'}, { list: 'bullet' }],
            [{ indent: '-1'}, { indent: '+1' }],
        
            [{ size: ['small', false, 'large', 'huge'] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['link', 'image'],
            [{ color: [] }, { background: [] }],
            ['clean']
          ]
    };


    return(
        <ReactQuill 
            value={value} 
            theme= {'snow'}
            onChange={onChange} 
            modules={modules} 
        />
    );
}