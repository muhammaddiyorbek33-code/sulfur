import { useState } from "react";

const Order = () => {
    const initialFields = {
        company: "",
        country: "",
        city: "",
        address: "",
        person: "",
        phone: "",
        email: "",
        product: "",
        quantity: "",
        delivery: "",
        destination: "",
        comments: ""
    };

    const [fields, setFields] = useState(initialFields);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); 

    const requiredFields = [
        "country",
        "city",
        "address",
        "person",
        "phone",
        "email",
        "product",
        "quantity"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFields({ ...fields, [name]: value });

        if (value.trim() !== "") {
            setErrors((prev) => ({ ...prev, [name]: false }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus(null);

        let newErrors = {};
        requiredFields.forEach((field) => {
            if (!fields[field].trim()) newErrors[field] = true;
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            setStatus("error");
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setStatus("success");
            setFields(initialFields);
        }, 1500);
    };

    const inputClasses =
        "w-full border rounded-md py-2 px-3 focus:outline-none focus:border-[#f09b00] transition";

    return (
        <div id="order-section" className="bg-[#f5f5f5] min-h-screen flex items-start justify-center py-12">
            <section className="max-w-xl w-full">
                <h2 className="text-[#404040] text-[50px] text-center text-3xl font-semibold mb-10">Order</h2>

                <form onSubmit={handleSubmit} className="space-y-5 bg-white p-8 rounded-lg shadow-md">
                    <input
                        name="company"
                        type="text"
                        placeholder="Company Name"
                        className={inputClasses}
                        value={fields.company}
                        onChange={handleChange}
                    />

                    {[
                        { name: "country", label: "Country *" },
                        { name: "city", label: "City *" },
                        { name: "address", label: "Address *" },
                        { name: "person", label: "Person's Name *" },
                        { name: "phone", label: "Telephone *" },
                        { name: "email", label: "E-mail Address *" },
                        { name: "product", label: "Chemical/Product Name *" },
                        { name: "quantity", label: "Quantity *" }
                    ].map((item) => (
                        <div key={item.name} className="relative">
                            <input
                                name={item.name}
                                type="text"
                                placeholder={item.label}
                                className={`${inputClasses} ${errors[item.name] ? "border-red-500" : ""}`}
                                value={fields[item.name]}
                                onChange={handleChange}
                            />
                            <div className="h-5">
                                {errors[item.name] && (
                                    <p className="text-red-500 text-sm leading-tight">
                                        Please fill out this field.
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}

                    <input
                        name="delivery"
                        type="text"
                        placeholder="Desired Delivery Time"
                        className={inputClasses}
                        value={fields.delivery}
                        onChange={handleChange}
                    />
                    <input
                        name="destination"
                        type="text"
                        placeholder="Ultimate Destination"
                        className={inputClasses}
                        value={fields.destination}
                        onChange={handleChange}
                    />
                    <textarea
                        name="comments"
                        placeholder="Other Comments"
                        className={inputClasses + " h-28 resize-none"}
                        value={fields.comments}
                        onChange={handleChange}
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-[#f09b00] py-3 px-10 w-full rounded-full text-white font-semibold tracking-wide mt-4 hover:bg-[#d68900] transition flex justify-center"
                    >
                        {loading ? (
                            <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                        ) : (
                            "Send an order"
                        )}
                    </button>
                </form>

                <div className="mt-6 min-h-[50px] flex items-center justify-center text-center">
                    {status === "error" && (
                        <p className="text-red-500 border border-red-400 py-2 px-4">
                            One or more fields have an error. Please check and try again.
                        </p>
                    )}

                    {status === "success" && (
                        <p className="text-green-600 border border-green-500 py-2 px-4">
                            Thank you for your message. It has been sent.
                        </p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Order;
