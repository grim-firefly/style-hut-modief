import Image from 'next/image';
import * as React from 'react';
import { useRouter } from 'next/router';
import { Input, SelectionInput, TagInput, TextArea } from '../components/Form';
import _ from 'lodash';

type ProductCreateFormProps = {
    editData?: { [key: string]: any };
};

const ProductCreateForm = ({ editData = {} }: ProductCreateFormProps) => {
    const [name, setName] = React.useState<string>('');
    const [price, setPrice] = React.useState<number>(0);
    const [discount, setDiscount] = React.useState<number>(0);
    const [mainCategory, setMainCategory] = React.useState<string>('');
    const [subCategory, setSubCategory] = React.useState<string>('');
    const [sizes, setSizes] = React.useState<string[]>([]);
    const [colors, setColors] = React.useState<string[]>([]);
    const [tags, setTags] = React.useState<string[]>([]);
    const [gander, setGander] = React.useState<string>('');
    const [stock, setStock] = React.useState<number>(0);
    const [brand, setBrand] = React.useState<string>('');
    const [warrenty, setWarrenty] = React.useState<string>('');
    const [shipping, setShipping] = React.useState<number>(0);
    const [description, setDescription] = React.useState<string>('');
    const [images, setImages] = React.useState<File[]>([]);
    const [details, setDetails] = React.useState<string>('');

    // preview images
    const [previewImages, setPreviewImages] = React.useState<string[]>([]);

    // router for redirect to products page
    const router = useRouter();

    // handle go back
    const handleGoBack = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.back();
    };

    // handle edit data
    React.useEffect(() => {
        if (!_.isEmpty(editData)) {
            setName(editData.name);
            setPrice(editData.price);
            setDiscount(editData.discount);
            setMainCategory(editData.mainCategory);
            setSubCategory(editData.subCategory);
            setSizes(editData.sizes);
            setColors(editData.colors);
            setTags(editData.tags);
            setGander(editData.gander);
            setStock(editData.stock);
            setBrand(editData.brand);
            setWarrenty(editData.warrenty);
            setShipping(editData.shipping);
            setDescription(editData.description);
            setDetails(editData.details);
            setPreviewImages(editData.images);
        }

        return () => {
            clearFormData();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // clear form data
    const clearFormData = () => {
        setName('');
        setPrice(0);
        setDiscount(0);
        setMainCategory('');
        setSubCategory('');
        setSizes([]);
        setColors([]);
        setTags([]);
        setGander('');
        setStock(0);
        setBrand('');
        setWarrenty('');
        setShipping(0);
        setDescription('');
        setDetails('');
        setPreviewImages([]);
    };

    // handle image upload and preview image
    const handleImageUpload = async (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const files = e.target.files;
        if (files) {
            const images = Array.from(files);

            setImages((prev) => [...prev, ...images]);
            const previewImages = images.map((image) =>
                URL.createObjectURL(image),
            );
            setPreviewImages((prev) => [...prev, ...previewImages]);
        }
    };

    // handle image remove from preview and images
    const handleImageRemove = (
        e: React.MouseEvent<HTMLButtonElement>,
        index: number,
    ) => {
        e.preventDefault();
        setImages((prev) => prev.filter((_, i) => i !== index));
        setPreviewImages((prev) => prev.filter((_, i) => i !== index));
    };

    // handle form submit and send data to server
    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', String(price));
        formData.append('discount', String(discount));
        formData.append('mainCategory', mainCategory);
        formData.append('subCategory', subCategory);
        formData.append('sizes', JSON.stringify(sizes));
        formData.append('colors', JSON.stringify(colors));
        formData.append('tags', JSON.stringify(tags));
        formData.append('gander', gander);
        formData.append('stock', String(stock));
        formData.append('brand', brand);
        formData.append('warrenty', warrenty);
        formData.append('shipping', String(shipping));
        formData.append('description', description);
        formData.append('details', details);
        images.forEach((image) => {
            formData.append('images', image);
        });
        console.log(formData);
    };

    return (
        <div>
            <div className="grid grid-cols-12 gap-8 mb-5">
                <div className="col-span-12 md:col-span-6">
                    <div className="flex flex-col gap-4">
                        <Input
                            type="text"
                            label="Product Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-transpernt border border-dashed border-zinc-300"
                        />

                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 lg:col-span-1">
                                <Input
                                    type="Number"
                                    label="Prices"
                                    value={price}
                                    onChange={(e) =>
                                        setPrice(Number(e.target.value))
                                    }
                                    className="bg-transpernt border border-dashed border-zinc-300"
                                />
                            </div>
                            <div className="col-span-2 lg:col-span-1">
                                <Input
                                    type="Number"
                                    label="Discount"
                                    value={discount}
                                    onChange={(e) =>
                                        setDiscount(Number(e.target.value))
                                    }
                                    className="bg-transpernt border border-dashed border-zinc-300"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 lg:col-span-1">
                                <Input
                                    type="text"
                                    label="Main Category"
                                    value={mainCategory}
                                    onChange={(e) =>
                                        setMainCategory(e.target.value)
                                    }
                                    className="bg-transpernt border border-dashed border-zinc-300"
                                />
                            </div>
                            <div className="col-span-2 lg:col-span-1">
                                <Input
                                    type="text"
                                    label="Sum Category"
                                    value={subCategory}
                                    onChange={(e) =>
                                        setSubCategory(e.target.value)
                                    }
                                    className="bg-transpernt border border-dashed border-zinc-300"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 lg:col-span-1">
                                <TagInput
                                    label="Sizes"
                                    tags={sizes}
                                    setTags={setSizes}
                                    placeholder="Add a size"
                                />
                            </div>
                            <div className="col-span-2 lg:col-span-1">
                                <TagInput
                                    label="Colors"
                                    tags={colors}
                                    setTags={setColors}
                                    placeholder="Add a color"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 lg:col-span-1">
                                <SelectionInput
                                    label="Gander"
                                    value={gander}
                                    options={[
                                        { title: 'Male', val: 'male' },
                                        { title: 'Female', val: 'female' },
                                        { title: 'Baby', val: 'Baby' },
                                    ]}
                                    onSelect={(val) => setGander(val as string)}
                                    className="border border-dashed border-zinc-300"
                                />
                            </div>
                            <div className="col-span-2 lg:col-span-1">
                                <Input
                                    type="number"
                                    label="Stock"
                                    value={stock}
                                    onChange={(e) =>
                                        setStock(Number(e.target.value))
                                    }
                                    className="bg-transpernt border border-dashed border-zinc-300"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 lg:col-span-1">
                                <Input
                                    type="text"
                                    label="Brand"
                                    value={brand}
                                    onChange={(e) => setBrand(e.target.value)}
                                    className="bg-transpernt border border-dashed border-zinc-300"
                                />
                            </div>
                            <div className="col-span-2 lg:col-span-1">
                                <Input
                                    type="text"
                                    label="Warrenty"
                                    value={warrenty}
                                    onChange={(e) =>
                                        setWarrenty(e.target.value)
                                    }
                                    className="bg-transpernt border border-dashed border-zinc-300"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 lg:col-span-1">
                                <Input
                                    type="number"
                                    label="Shipping"
                                    value={shipping}
                                    onChange={(e) =>
                                        setShipping(Number(e.target.value))
                                    }
                                    className="bg-transpernt border border-dashed border-zinc-300"
                                />
                            </div>
                            <div className="col-span-2 lg:col-span-1">
                                <TagInput
                                    label="Tags"
                                    tags={tags}
                                    setTags={setTags}
                                    placeholder="Add a tags"
                                />
                            </div>
                        </div>

                        {/* details */}
                        <div>
                            <label htmlFor="">
                                <span className="block mb-2">Details</span>
                                <TextArea
                                    rows={5}
                                    value={details}
                                    onChange={(e) => setDetails(e.target.value)}
                                    className="border border-dashed border-zinc-300 bg-transparent"
                                />
                            </label>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-6">
                    <div className="flex flex-col gap-3">
                        {/* Description */}
                        <div>
                            <label htmlFor="">
                                <span className="block mb-2">Description</span>
                                <TextArea
                                    rows={10}
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                    className="border border-dashed border-zinc-300 bg-transparent"
                                />
                            </label>
                        </div>

                        {/* Images */}
                        <div>
                            <label htmlFor="" className="block mb-3">
                                Upload Images
                            </label>
                            <div className="flex items-center flex-wrap gap-3">
                                {previewImages.length > 0
                                    ? previewImages.map((img, i) => (
                                          <div
                                              key={i}
                                              className="w-fit h-fit rounded-md relative"
                                          >
                                              <button
                                                  aria-describedby="delete-image"
                                                  onClick={(e) =>
                                                      handleImageRemove(e, i)
                                                  }
                                                  className="flex items-center justify-center absolute top-3 left-3 z-10 w-6 h-6 rounded-md bg-red-500 hover:bg-red-600 text-red-50"
                                              >
                                                  <i className="fi fi-rr-trash -mb-1" />
                                              </button>
                                              <div className="relative w-28 h-28 border border-dashed rounded-md bg-gray-100 border-zinc-400">
                                                  {!img ? null : (
                                                      <Image
                                                          src={img}
                                                          alt={`image-${i}`}
                                                          fill
                                                          sizes="112px"
                                                          className="rounded-md"
                                                      />
                                                  )}
                                              </div>
                                          </div>
                                      ))
                                    : null}

                                {/* input */}
                                <div className="w-28 h-28 border border-dashed border-zinc-400 rounded-md">
                                    <div className="relative flex items-center justify-center h-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            />
                                        </svg>

                                        <input
                                            type="file"
                                            multiple
                                            onChange={handleImageUpload}
                                            className="opacity-0 absolute top-0 left-0 w-full h-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-blue-50 rounded-md px-5 py-2 transition-colors ease-linear duration-200 "
                >
                    Save
                </button>
                <button
                    type="button"
                    onClick={handleGoBack}
                    className="bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-red-50 rounded-md px-5 py-2 transition-colors ease-linear duration-200"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default ProductCreateForm;
