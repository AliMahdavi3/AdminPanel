import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import PrevPageButton from "../../../components/PrevPageButton";
import SpinnerLoad from "../../../components/SpinnerLoad";
import { apiPath } from "../../../services/httpService";
import { addProductImgService, deleteProductImgService, setMainProductImgService } from "../../../services/product";
import { Alert, Confirm } from "../../../utils/Alert";

const ProductGallery = () => {
  const location = useLocation();
  const { selectedProduct } = location.state;
  const [gallery, setGallery] = useState(selectedProduct.gallery);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSelectImage = async (e) => {
    setError(null)
    const image = e.target.files[0];
    const formdata = new FormData()
    formdata.append('image', image)

    if(image.type != 'image/png' && image.type != 'image/jpeg' && image.type != 'image/jpg')
        return setError("فقط از فرمت jpg یا png استفاده کنید");
    if(image.size > 512000) return setError("حجم تصویر نباید 500 کیلوبایت بیشتر شود");

    setLoading(true)
    const res = await addProductImgService(selectedProduct.id, formdata);
         setLoading(false)
        if(res.status === 201){
            Alert("انجام شد", res.data.message, "success");
            setGallery(old=>[...old, {id:res.data.data.id, is_main:0, image:res.data.data.image}])
        }
  }

  const handleDeleteImage = async (imageId) => {
    if(await Confirm("ایا از حذف این تصویر اطمینان دارید ؟"));
      setLoading(true);
      const res = await deleteProductImgService(imageId);
      setLoading(false);
      if(res.status === 200) {
        Alert("انجام شد", res.data.message, "success");
        setGallery(old=>old.filter(image=>image.id != imageId));
      }
  }

  const handleSetMainImage = async (imageId)=>{
        setLoading(true)
        const res = await setMainProductImgService(imageId);
        setLoading(false)
        if (res.status === 200) {
            Alert('انجام شد' , res.data.message, 'success');
            setGallery(old=>{
                let newGallery=  old.map(img=>{return{...img, is_main : 0}})     
                const index = newGallery.findIndex(i=>i.id == imageId);
                newGallery[index].is_main = 1;
                return newGallery           
            })
        }
  }

  return (
    <div className="container category-style">
      <h4 className="text-center mt-5">
        مدیریت گالری تصاویر :
        <span className="text-info">{selectedProduct.title}</span>
      </h4>

      <div className="text-end my-auto mt-5">
        <PrevPageButton/>
      </div>


      <div className="row justify-content-center">
        
        {
            error ? (
                <small className="d-block text-danger text-right py-3">{error}</small>
            ) : null
        }

            <div className="text-right d-flex flex-wrap">
                {
                    gallery.length > 0 ? 
                          gallery.map(g=>(
                            <div key={g.id} className={`rounded border bg-white ms-1 shadow-sm img-gallery
                                d-flex justify-content-center align-items-center pos-relative my-1
                                ${g.is_main ? "main-image" : ""}`} 
                                title={g.is_main ? 'تصویر اصلی' : ""}>
                                <img src={apiPath+"/"+g.image} className="bg-white ms-1 w-100"/>
                                <div className="img-container">
                                {!g.is_main ? (
                                    <i className="bi bi-check text-success pointer fs-3"
                                    onClick={()=>handleSetMainImage(g.id)}></i>
                                ) : null}
                                    <i className="bi bi-x text-success pointer fs-3" 
                                    onClick={()=>handleDeleteImage(g.id)}></i>
                                </div>
                             </div>
                        ))
                       : null
                }

                  <div className={`rounded border bg-white ms-1 position-relative  shadow-lg add-img-gallery
                        d-flex justify-content-center align-items-center text-center my-1
                        ${loading ? "disabled-100" : ""}`} 
                        title="افزودن تصویر جدید">
                            {
                                loading ? (
                                    <SpinnerLoad/>
                                ) : (
                                    <i className="bi bi-plus font-size d-flex justify-content-center text-success 
                                    border rounded-circle"></i>
                                )
                            }

                            <input type="file" name="image" 
                            className="position-absolute opacity-0 w-100 h-100 pointer" 
                            onChange={handleSelectImage} multiple={true}
                            />
                     </div>            
            </div>
      
      </div>
    </div>
  );
};

export default ProductGallery;
