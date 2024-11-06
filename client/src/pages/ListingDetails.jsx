import { useEffect, useState } from "react";
import "../styles/ListingDetails.scss";
import { useNavigate, useParams } from "react-router-dom";
import { facilities } from "../data";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";

const ListingDetails = () => {
    const [loading, setLoading] = useState(true);
    const { listingId } = useParams();
    const [listing, setListing] = useState(null);

    const customerId = useSelector((state) => state?.user?._id);
    const navigate = useNavigate();

    const getListingDetails = async () => {
        try {
            const response = await fetch(
                `http://localhost:3001/properties/${listingId}`,
                { method: "GET" }
            );
            const data = await response.json();
            setListing(data);
            setLoading(false);
        } catch (err) {
            console.log("Fetch Listing Details Failed", err.message);
        }
    };

    useEffect(() => {
        getListingDetails();
    }, []);

    console.log(listing);

    // Navigate to the Contact Renter page and pass the renter's email
    const handleBooking = () => {
        navigate("/contact-renter", {
            state: {
                renterEmail: listing.creator.email
            }
        });
    };

    return loading ? (
        <Loader />
    ) : (
        <>
            <Navbar />
            <div className="listing-details">
                <div className="title">
                    <h1>{listing.title}</h1>
                </div>

                <div className="photos">
                    {listing.listingPhotoPaths?.map((item) => (
                        <img
                            key={item}
                            src={`http://localhost:3001/${item.replace("public", "")}`}
                            alt="listing photo"
                        />
                    ))}
                </div>

                <h2>
                    {listing.type} in {listing.city}, {listing.province}, {listing.country}
                </h2>
                <p>
                    {listing.guestCount} guests - {listing.bedroomCount} bedroom(s) -{" "}
                    {listing.bedCount} bed(s) - {listing.bathroomCount} bathroom(s)
                </p>
                <hr />

                <div className="profile">
                    <img
                        src={`http://localhost:3001/${listing.creator.profileImagePath.replace(
                            "public",
                            ""
                        )}`}
                        alt="Host profile"
                    />
                    <h3>
                        Hosted by {listing.creator.firstName} {listing.creator.lastName}
                    </h3>
                </div>
                <hr />

                <h3>Description</h3>
                <p>{listing.description}</p>
                <hr />

                <h3>{listing.highlight}</h3>
                <p>{listing.highlightDesc}</p>
                <hr />

                <div className="booking">
                    <div>
                        <h2>What this place offers?</h2>
                        <div className="amenities">
                            {listing.amenities[0].split(",").map((item, index) => (
                                <div className="facility" key={index}>
                                    <div className="facility_icon">
                                        {
                                            facilities.find((facility) => facility.name === item)
                                                ?.icon
                                        }
                                    </div>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2>Do you want to stay?</h2>
                        <div className="date-range-calendar">
                            <h2>
                                LKR {listing.price}
                                <span id="permonth"> /per month</span>
                            </h2>
                            <button
                                className="button"
                                type="button"
                                onClick={handleBooking}
                            >
                                Contact Renter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ListingDetails;
