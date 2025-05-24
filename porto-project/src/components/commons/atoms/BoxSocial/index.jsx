const listSocial = [
  {
    name: "WhatsApp",
    icon:"fa-brands fa-whatsapp",
    link: "https://wa.me/62895326305198/?text=Let's%20Collaborate%20",
  },
 
  {
    name: "Instagram",
    icon: "fa-brands fa-instagram",
    link: "https://www.instagram.com/alvin_sunarli?igsh=cTVxNGpuMGhtanBs",
  },
  {
    name: "LinkedIn",
    icon: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/alvinsunarli?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

const BoxSocial = () => {
  return (
    <div className="mt-15 flex gap-2">
      {listSocial.map((item, index) => (
        <button
          key={index}
          className="cursor-pointer rounded-full border-2 border-(--bg-secondary-cray) px-2 py-1 hover:bg-(--bg-secondary-cray)"
          onClick={() => window.open(item.link, "_blank")}
        >
          <i className={`${item.icon} text-md`}></i>
        </button>
      ))}
    </div>
  );
};
export default BoxSocial;