import * as Blockly from 'blockly';
import clsx from 'clsx';

export class CustomCategory extends Blockly.ToolboxCategory {
  constructor(
    categoryDef: Blockly.utils.toolbox.CategoryInfo,
    toolbox: Blockly.IToolbox,
    opt_parent?: Blockly.ICollapsibleToolboxItem,
  ) {
    super(categoryDef, toolbox, opt_parent);
  }

  /** @override */
  setSelected(isSelected: boolean): void {
    super.setSelected(isSelected);

    if (this.labelDom_ instanceof HTMLSpanElement) {
      this.labelDom_.style.color = isSelected ? '#FEF3E0' : this.colour_;
    }
  }

  /** @override */
  protected makeDefaultCssConfig_(): Blockly.ToolboxCategory.CssConfig {
    const className = clsx(
      'aria-selected:text-[#FEF3E0] aria-selected:[&_svg]:text-[#FEF3E0]! cursor-pointer',
    );

    const rowClassName = clsx(
      'h-10 text-lg flex items-center transition-colors duration-200',
    );

    return {
      ...super.makeDefaultCssConfig_(),
      container: className,
      row: rowClassName,
      rowcontentcontainer: clsx('flex items-center'),
    };
  }

  /** @override */
  protected addColourBorder_(colour: string): void {
    if (!this.rowDiv_) return;
    this.rowDiv_.style.borderLeft = `10px solid ${colour}`;
  }

  /** @override */
  protected createIconDom_(): Element {
    const icon = document.createElement('i');
    if (this.toolboxItemDef_.cssconfig?.icon) {
      icon.className = this.toolboxItemDef_.cssconfig.icon;
      icon.style.color = this.colour_;
      icon.style.width = '20px';
      icon.style.height = '100%';
      icon.classList.add('mx-[.5em]', 'duration-200', 'transition-colors');
    }
    return icon;
  }

  /** @override */
  protected createLabelDom_(name: string): Element {
    const className =
      'text-lg font-medium text-[1.15rem] transition-colors duration-200';

    const label = document.createElement('span');
    label.innerText = name;
    label.style.color = this.colour_;
    label.className = className;

    return label;
  }
}
