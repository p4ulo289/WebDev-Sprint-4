// mx-10 my-4 reproduz a margem padrão do <figure>, que a Sprint 3 não zerava.
export default function GalleryItem({ caption, children }) {
  return (
    <figure className="mx-10 my-4 min-w-0 text-center md:last:col-span-full md:last:mx-auto md:last:my-0 md:last:max-w-[260px] lg:last:col-auto lg:last:mx-0 lg:last:max-w-none">
      {children}
      <figcaption className="mx-auto mt-5 max-w-[30ch] text-[.92rem] leading-normal text-ink-soft [&_strong]:text-ink">
        {caption}
      </figcaption>
    </figure>
  )
}
