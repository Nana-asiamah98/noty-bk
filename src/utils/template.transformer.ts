import { Exception } from 'handlebars';

export const templateTransformer = async (
  template: TemplateSample,
): Promise<string> => {
  if (template.style === null && template.body === null)
    throw new Exception('Template is empty.');

  let sampleTemplate: string = ''
    .concat('<head>')
    .concat(template.style)
    .concat('</head>')
    .concat(template.body);

  return await sampleTemplate;
};

export const getMessageId = async (messageId) : Promise<string> => {
  const res : string[] = messageId
    .replace("/^'/i", "")
    .replace("<", "")
    .replace(">", "")
    .split("@");

    if(res.length > 1){
      return await res[0];
    }

    return  await "NA";
};
