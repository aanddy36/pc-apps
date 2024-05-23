import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useTranslations } from "../../i18n/utils";
import location from "../../assets/location.svg";
import phone from "../../assets/phone.svg";
import email from "../../assets/email.svg";

export const AboutLocation = ({ lang }: { lang: "en" | "es" }) => {
  const t = useTranslations(lang);

  var greenIcon = L.icon({
    iconUrl: "/location-pin.png",
    shadowUrl: "/marker-shadow.png",
    iconSize: [38, 38], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [20, 32], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [0, -46], // point from which the popup should open relative to the iconAnchor
  });

  return (
    <section className=" py-10 px-4 laptop:px-16 flex flex-col gap-8">
      <div className="flex flex-col gap-[10px] items-center">
        <h5 className="text-blue font-medium">{t("about.locationTitle")}</h5>
        <h3 className="text-black font-semibold text-center text-xl tablet:text-3xl">
          {t("about.locationSubtitle")}
        </h3>
      </div>
      <MapContainer
        center={[25.942, -80.324]}
        zoom={16}
        scrollWheelZoom={false}
        style={{ width: "100%" }}
        className="h-[500px] laptop:h-[600px] full:h-[400px] rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[25.942, -80.324]} icon={greenIcon}>
          <Popup className="bg-bg">
            <p className="">{t("about.locationPinMsj")}</p>
          </Popup>
        </Marker>
      </MapContainer>
      <ul className=" flex items-start gap-y-14 gap-10 laptop:gap-20 flex-wrap justify-between laptop:justify-start">
        <li className="flex flex-col gap-1">
          <div className=" font-semibold text-lg flex items-center gap-3 tracking-wider">
            <img src={location.src} alt="Location Ping" />{" "}
            {t("about.locationAddress")}:
          </div>
          <div className="flex flex-col opacity-70">
            <span>7676 NW 186 th St., Suite 214.</span>
            <span>Miami, Fl. 33015</span>
          </div>
        </li>
        <li className="flex flex-col gap-1">
          <div className=" font-semibold text-lg flex items-center gap-3 tracking-wider">
            <img src={phone.src} alt="Location Ping" />{" "}
            {t("about.locationPhone")}:
          </div>
          <span className="opacity-70">+1 (702) 239-2987</span>
        </li>
        <li className="flex flex-col gap-1">
          <div className=" font-semibold text-lg flex items-center gap-3 tracking-wider">
            <img src={email.src} alt="Location Ping" /> Email:
          </div>
          <span className="opacity-70">info@pcappsint.com</span>
        </li>
      </ul>
    </section>
  );
};
