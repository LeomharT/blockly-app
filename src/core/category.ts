import * as Blockly from 'blockly';

export class CustomCategory extends Blockly.ToolboxCategory {
  constructor(
    categoryDef: Blockly.utils.toolbox.CategoryInfo,
    toolbox: Blockly.IToolbox,
    opt_parent?: Blockly.ICollapsibleToolboxItem,
  ) {
    super(categoryDef, toolbox, opt_parent);
  }

  /** @override */
  protected addColourBorder_(colour: string): void {
    if (!this.rowDiv_) return;
    this.rowDiv_.style.borderLeft = `8px solid ${colour}`;
  }

  /** @override */
  setSelected(isSelected: boolean): void {
    super.setSelected(isSelected);
  }

  /** @override */
  protected createIconDom_(): Element {
    const icon = document.createElement('i');
    if (this.toolboxItemDef_.cssconfig?.icon) {
      icon.className = this.toolboxItemDef_.cssconfig.icon;
      icon.style.color = this.colour_;
    }
    return icon;
  }
}
