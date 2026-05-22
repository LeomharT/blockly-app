import * as Blockly from 'blockly';

export class IconLabel extends Blockly.FlyoutButton {
  /**
   * @override
   */
  public override show() {
    // 调用基类创建基础的 SVG 元素
    super.show();

    // 在这里你可以自定义样式
    // 例如：让文字变粗、添加图标等
    if (this.textElement_) {
      this.textElement_.style.fontWeight = 'bold';
      this.textElement_.style.fontSize = '14px';
      this.textElement_.setAttribute('fill', '#5b5b5b');
    }

    // 如果你想在前面加个图标，可以操作 this.svgGroup_
    // const icon = Blockly.utils.dom.createSvgElement('image', {...}, this.svgGroup_);
  }
}
