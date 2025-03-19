import Button from "@mui/material/Button";

const SocialButton = ({ icon, onMouseEnter, onMouseLeave }) => (
  <Button
    variant="outline"
    size="icon"
    className="rounded-full border-zinc-700 text-white hover:bg-white hover:text-black transition-colors h-12 w-12"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {icon}
  </Button>
)

export default SocialButton
