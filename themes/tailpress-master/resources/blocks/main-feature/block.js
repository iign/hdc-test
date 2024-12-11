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
  },
  edit({ attributes, setAttributes }) {
    const { heading, subheading, text, buttonText, buttonLink, images } =
      attributes;

    const updateImage = (image, index) => {
      const updatedImages = [...images];
      updatedImages[index] = { id: image.id, url: image.url, alt: image.alt };
      setAttributes({ images: updatedImages });
    };

    const removeImage = (index) => {
      const updatedImages = images.filter((_, i) => i !== index);
      setAttributes({ images: updatedImages });
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
            tagName="h2"
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
        </div>
      </div>
    );
  },
  save({ attributes }) {
    const { heading, subheading, text, buttonText, buttonLink, images } =
      attributes;

    return (
      <section className="py-14 bg-neutral-200">
        <div className="container mx-auto">
          <div className="main-feature">
            <div className="div-1">
              <h2
                className="font-serif text-4xl lg:text-6xl"
                dangerouslySetInnerHTML={{ __html: heading }}
              ></h2>
            </div>

            <div className="div-2 main-img">
              <img key={1} src={images[0].url} alt={images[0].alt} />
            </div>
            <div className="hidden lg:block div-3">
              <img key={2} src={images[1].url} alt={images[1].alt} />
            </div>
            <div className="hidden lg:block div-5">
              <img key={3} src={images[2].url} alt={images[2].alt} />
            </div>

            <div className="div-4">
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
      </section>
    );
  },
});

{
  /* <div className="main-feature-block">
        <h2>{heading}</h2>
        <div className="images-section">
          {images.map((image, index) => (
            <img key={index} src={image.url} alt={image.alt} />
          ))}
        </div>
        <h3>{subheading}</h3>
        <p>{text}</p>
        <a className="button-link" href={buttonLink}>
          {buttonText}
        </a>
      </div> */
}
