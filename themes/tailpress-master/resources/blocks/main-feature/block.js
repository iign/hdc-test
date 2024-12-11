const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { RichText, MediaUpload, URLInputButton, InspectorControls } =
  wp.blockEditor;
const { PanelBody, Button, TextControl } = wp.components;

import "./editor.css"; // Styles for the editor.

registerBlockType("theme/main-feature", {
  title: __("Main Feature", "theme"),
  icon: "star-filled",
  category: "layout",
  attributes: {
    heading: { type: "string", default: "Main Feature Heading" },
    subheading: { type: "string", default: "Subheading" },
    text: { type: "string", default: "Descriptive text here." },
    buttonText: { type: "string", default: "View our services" },
    buttonLink: { type: "string", default: "#" },
    images: {
      type: "array",
      default: [],
      items: {
        type: "object",
        properties: {
          id: { type: "number" },
          url: { type: "string" },
          alt: { type: "string" },
        },
      },
    },
    logosHeading: { type: "string", default: "Logo strip heading" },
    logosButtonText: { type: "string", default: "View All" },
    logosButtonLink: { type: "string", default: "#" },
    logos: {
      type: "array",
      default: [],
      items: {
        type: "object",
        properties: {
          id: { type: "number" },
          url: { type: "string" },
          alt: { type: "string" },
        },
      },
    },
  },
  edit({ attributes, setAttributes }) {
    const {
      heading,
      subheading,
      text,
      buttonText,
      buttonLink,
      images,
      logosHeading,
      logosButtonText,
      logosButtonLink,
      logos,
    } = attributes;

    const updateImage = (image, index) => {
      const updatedImages = [...images];
      updatedImages[index] = { id: image.id, url: image.url, alt: image.alt };
      setAttributes({ images: updatedImages });
    };

    const removeImage = (index) => {
      const updatedImages = images.filter((_, i) => i !== index);
      setAttributes({ images: updatedImages });
    };

    const updateLogo = (logo, index) => {
      const updatedLogos = [...logos];
      updatedLogos[index] = { id: logo.id, url: logo.url, alt: logo.alt };
      setAttributes({ logos: updatedLogos });
    };

    const removeLogo = (index) => {
      const updatedLogos = logos.filter((_, i) => i !== index);
      setAttributes({ logos: updatedLogos });
    };

    return (
      <div className="main-feature-editor bg-neutral-200 p-2">
        <InspectorControls>
          <PanelBody title={__("Settings", "theme")}>
            <TextControl
              label={__("Button Text", "theme")}
              value={buttonText}
              onChange={(value) => setAttributes({ buttonText: value })}
            />
            <URLInputButton
              url={buttonLink}
              onChange={(url) => setAttributes({ buttonLink: url })}
            />
          </PanelBody>
        </InspectorControls>
        <div className="main-feature-block">
          <RichText
            tagName="h3"
            className="font-serif"
            value={heading}
            onChange={(value) => setAttributes({ heading: value })}
            placeholder={__("Heading", "theme")}
          />
          <div className="images-section grid grid-cols-3 gap-2">
            {[0, 1, 2].map((_, index) => (
              <div key={index} className="image-upload">
                {images[index] ? (
                  <img
                    src={images[index].url}
                    alt={images[index].alt}
                    className="preview-image"
                  />
                ) : (
                  <MediaUpload
                    onSelect={(image) => updateImage(image, index)}
                    allowedTypes={["image"]}
                    render={({ open }) => (
                      <Button onClick={open} variant="primary">
                        {__("Upload Image", "theme")}
                      </Button>
                    )}
                  />
                )}
                {images[index] && (
                  <Button
                    onClick={() => removeImage(index)}
                    variant="secondary"
                  >
                    {__("Remove", "theme")}
                  </Button>
                )}
              </div>
            ))}
          </div>
          <RichText
            tagName="h3"
            value={subheading}
            onChange={(value) => setAttributes({ subheading: value })}
            placeholder={__("Subheading", "theme")}
          />
          <RichText
            tagName="p"
            value={text}
            onChange={(value) => setAttributes({ text: value })}
            placeholder={__("Text", "theme")}
          />
          <a className="hdc-btn" href={buttonLink}>
            {buttonText}
          </a>

          <RichText
            tagName="h2"
            value={logosHeading}
            className="font-serif"
            onChange={(value) => setAttributes({ logosHeading: value })}
            placeholder={__("Add a heading", "theme")}
          />
          <div className="logos-section grid grid-cols-3 gap-2">
            {logos.map((logo, index) => (
              <div key={index} className="image-upload">
                {logo.url ? (
                  <img
                    src={logo.url}
                    alt={logo.alt}
                    className="preview-image"
                  />
                ) : (
                  <MediaUpload
                    onSelect={(image) =>
                      updateLogo(
                        { id: image.id, url: image.url, alt: image.alt },
                        index
                      )
                    }
                    allowedTypes={["image", "svg"]}
                    render={({ open }) => (
                      <Button onClick={open} variant="primary">
                        {__("Upload Logo", "theme")}
                      </Button>
                    )}
                  />
                )}
                <Button onClick={() => removeLogo(index)} variant="secondary">
                  {__("Remove", "theme")}
                </Button>
              </div>
            ))}
            <Button
              onClick={() =>
                setAttributes({
                  logos: [...logos, { id: null, url: "", alt: "" }],
                })
              }
              variant="primary"
            >
              {__("Add Logo", "theme")}
            </Button>
          </div>
        </div>
      </div>
    );
  },
  save({ attributes }) {
    const {
      heading,
      subheading,
      text,
      buttonText,
      buttonLink,
      images,
      logosHeading,
      logosButtonText,
      logosButtonLink,
      logos,
    } = attributes;

    return (
      <section className="py-14 bg-neutral-200">
        <div className="container mx-auto">
          <div className="main-feature">
            <div className="main-feature__heading">
              <h2
                className="font-serif text-4xl lg:text-6xl"
                dangerouslySetInnerHTML={{ __html: heading }}
              ></h2>
            </div>

            <div className="main-feature__main-img">
              <img key={1} src={images[0].url} alt={images[0].alt} />
            </div>
            <div className="hidden lg:block main-feature__img-2">
              <img key={2} src={images[1].url} alt={images[1].alt} />
            </div>
            <div className="hidden lg:block main-feature__img-3">
              <img key={3} src={images[2].url} alt={images[2].alt} />
            </div>

            <div className="lg:mt-20 lg:ms-10 main-feature__content">
              <h3 className="uppercase font-sans font-medium text-neutral-900 mb-8 tracking-[1.88px]">
                {subheading}
              </h3>
              <p className="text-neutral-900 text-sm mb-8 leading-normal">
                {text}
              </p>
              <a className="hdc-btn" href={buttonLink}>
                {buttonText}
              </a>
            </div>
          </div>
        </div>

        <div class="py-14">
          <div className="container mx-auto">
            <div className="flex items-center justify-between gap-8 flex-wrap">
              <h2 className="font-serif text-4xl lg:text-6xl">
                {logosHeading}
              </h2>
              <a
                className="inline-flex items-center gap-4 uppercase text-[15px] font-medium text-neutral-900 group shrink-0"
                href={logosButtonLink}
              >
                <span className="leading-none">{logosButtonText}</span>
                <svg
                  className="w-4 h-auto text-blue group-hover:text-lime"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25.361"
                  height="18.93"
                  viewBox="0 0 25.361 18.93"
                >
                  <path
                    id="Path_44037"
                    data-name="Path 44037"
                    d="M864.62,0l4.732,12.68,4.733,12.681,4.732-12.681L883.55,0Z"
                    transform="translate(0 883.551) rotate(-90)"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div
            className="overflow-x-auto 
            pl-[calc((100vw-480px)/2)] 
            sm:pl-[calc((100vw-600px)/2)] 
            md:pl-[calc((100vw-782px)/2)]
            lg:pl-[calc((100vw-1120px)/2)] 
            mt-9 lg:mt-16
            scrollbar-hidden pb-4"
          >
            <div className="flex gap-5 lg:gap-10 px-4 lg:px-0 items-center">
              {logos.map((image, index) => (
                <div className="shrink-0 max-w-32 lg:max-w-60">
                  <img key={index} src={image.url} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  },
});
