type SvgIconProps = {
  name: string;
  width?: number;
  height?: number;
};

export default function SvgIcon({
  name,
  width = 20,
  height = 20,
}: SvgIconProps) {
  return (
    <svg width={width} height={height} aria-hidden="true" fill="none" stroke="currentColor">
      <use href={`/icons/sprite.svg#icon-${name}`} />
    </svg>
  );
}
