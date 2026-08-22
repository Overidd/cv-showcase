
/*
function CVRenderer({
  template,
  variant,
  data,
  config
}: CVRendererProps) {

  const family = templateRegistry[template];

  if (!family) {
    throw new Error(
      `Template "${template}" not found`
    );
  }

  const Template = family.variants[variant];

  if (!Template) {
    throw new Error(
      `Variant "${variant}" not found`
    );
  }

  return (
    <Template
      data={data}
      config={config}
    />
  );
}


------------
<CV
  template="harvard-classic"
  data={cvData}
  config={config}
/>
*/