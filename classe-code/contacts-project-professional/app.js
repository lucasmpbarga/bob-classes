import { makeTapAnyToContinue } from "./model/factory/tapAnyToContinueFactory.js";
import { utils } from "./model/helper/utils.js";
import { contactService } from "./model/services/contact-service.js";
import { CONSTANT } from "./view/ constant.js/constant.js";
import { input } from "./view/component/input.js";
import { menu } from "./view/page/menu.js";
import { STRING } from "./view/string/string.js";

const { INPUT, MESSAGE } = STRING;
const { OPTION, ATTRIBUTE, STOP_APP } = CONSTANT;

let option = OPTION.INITIAL;

const tapAnyToContinue = makeTapAnyToContinue({
  spaceLine: utils.spaceLine,
  input,
});

const getOption = () => {
  utils.spaceLine();
  option = input(INPUT.SELECT_OPTION);
};

menu.renderMenu();

while (option.toLowerCase() !== STOP_APP) {
  switch (option) {
    case OPTION.CREATE:
      utils.spaceLine();

      const newContact = {};
      newContact.name = input(INPUT.NAME);
      newContact.phone = input(INPUT.PHONE);
      newContact.email = input(INPUT.EMAIL);

      utils.spaceLine();
      contactService.saveNewContact(newContact);
      utils.showLog(MESSAGE.CREATE_SUCCESS);

      tapAnyToContinue();
      break;
    case OPTION.READ_ALL:
      utils.spaceLine();

      const contacts = contactService.getAllContacts();
      utils.showTable(contacts);

      tapAnyToContinue();
      break;
    case OPTION.READ_ONE:
      utils.spaceLine();
      const readContactIndex = input(INPUT.CONTACT_INDEX);
      const contact = contactService.getContactByIndex(readContactIndex);
      utils.spaceLine();
      utils.showContactWithMessage(contact);
      tapAnyToContinue();
      break;
    case OPTION.DELETE:
      utils.spaceLine();

      const removeContactIndex = input(INPUT.CONTACT_INDEX);
      const removedContact =
        contactService.removeContactByIndex(removeContactIndex);
      utils.spaceLine();
      utils.showContactWithMessage(removedContact, MESSAGE.DELETE_SUCCESS);
      tapAnyToContinue();
      break;
    case OPTION.UPDATE:
      utils.spaceLine();
      const updateContactIndex = input(INPUT.CONTACT_INDEX);
      utils.spaceLine();

      let attribute = input(INPUT.WHICH_ATTRIBUTE);

      const { NAME, PHONE, EMAIL } = ATTRIBUTE;

      while (![NAME, PHONE, EMAIL].includes(attribute)) {
        if (attribute.toLowerCase() === STOP_APP) {
          break;
        }

        utils.spaceLine();
        console.log(MESSAGE.PLEASE_VALID_ATT);
        utils.spaceLine();
        attribute = input(INPUT.WHICH_ATTRIBUTE);
      }

      if (attribute.toLowerCase() === STOP_APP) {
        break;
      }

      utils.spaceLine();
      const newValue = input(INPUT.NEW_VALUE);

      const response = contactService.updateContact(
        updateContactIndex,
        attribute,
        newValue
      );

      utils.spaceLine();
      utils.showContactWithMessage(response.oldContact, MESSAGE.UPDATE_SUCCESS);
      utils.spaceLine();
      utils.showContactWithMessage(response.newContact);

      tapAnyToContinue();
      break;
    default:
      if (option !== OPTION.NULL && option !== OPTION.INITIAL) {
        console.log(MESSAGE.OPTION_DONT_EXIST);
      }

      if (option === OPTION.NULL) {
        console.log(MESSAGE.DONT_SELECT_ANY);
      }

      if (option !== OPTION.INITIAL) {
        tapAnyToContinue();
      }

      break;
  }

  menu.renderMenu();
  getOption();
}
