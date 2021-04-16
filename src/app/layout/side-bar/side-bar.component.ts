import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DynamicTabService } from '../../services/dynamic-tab.sevice';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideBarComponent implements OnInit {


  constructor(private dynamicTabService: DynamicTabService) { }
  public dynamicTab;
  items: MenuItem[];
  items1: MenuItem[];

  ngOnInit(): void {


    this.items = [
      {
        label: 'Bán hàng',
        icon: 'pi pi-fw pi-shopping-cart',
      },
    ];

    this.items1 = [
      {
        label: 'Nghiệp vụ bán hàng',
        items: [
          // {
          //   label: 'Tạo chứng từ huỷ Care+',
          //   icon: 'pi pi-fw pi-circle-on',
          //   id: '138',
          //   command: (event) => {
          //     this.clickMenuItem(1006);
          //   }
          // },
          // {
          //   label: 'Phiếu chi',
          //   icon: 'pi pi-fw pi-circle-on',
          //   id: '138',
          //   command: (event) => {
          //     this.clickMenuItem(208);
          //   }
          // },
          // {
          //   label: 'Tạo hóa đơn bán hàng dịch vụ HĐ điện tử',
          //   icon: 'pi pi-fw pi-circle-on',
          //   id: '1574',
          //   command: (event) => {
          //     this.clickMenuItem(1574);
          //   }
          // },
          // {
          //   label: 'Quản lý thông tin coupon đã phát hành',
          //   icon: 'pi pi-fw pi-circle-on',
          //   id: '1026',
          //   command: (event) => {
          //     this.clickMenuItem(1026);
          //   }
          // },
          // {
          //   label: 'Định giá máy cũ',
          //   icon: 'pi pi-fw pi-circle-on',
          //   id: '183',
          //   command: (event) => {
          //     this.clickMenuItem(183);
          //   }
          // },
          // {
          //   label: 'Lật ô Samsung',
          //   icon: 'pi pi-fw pi-circle-on',
          //   id: '785',
          //   command: (event) => {
          //     this.clickMenuItem(785);
          //   }
          // },
          // {
          //   label: 'Yêu cầu đổi trả',
          //   icon: 'pi pi-fw pi-circle-on',
          //   id: '597',
          //   command: (event) => {
          //     this.clickMenuItem(597);
          //   }
          // },
          {
            label: 'Quản lý yêu cầu xuất bán',
            icon: 'pi pi-fw pi-circle-on',
            id: '138',
            command: (event) => {
              this.clickMenuItem(113);
            }
          },
          // {
          //   label: 'Quản lý yêu cầu đặt trước',
          //   icon: 'pi pi-fw pi-circle-on',
          //   id: '1547',
          //   command: (event) => {
          //     this.clickMenuItem(1547);
          //   }
          // },
          // {
          //   label: 'Quản lý chương trình đặt trước',
          //   icon: 'pi pi-fw pi-circle-on',
          //   id: '1225',
          //   command: (event) => {
          //     this.clickMenuItem(1225);
          //   }
          // },
          // {
          //   label: 'Tra cứu lập bù giao dịch',
          //   icon: 'pi pi-fw pi-circle-on',
          //   id: '1571',
          //   command: (event) => {
          //     this.clickMenuItem(1571);
          //   }
          // },
          {
            label: 'Bán hàng ',
            items: [
              {
                label: 'Bán hàng tại siêu thị',
                icon: 'pi pi-fw pi-circle-on',
                id: '138',
                command: (event) => {
                  this.clickMenuItem(138);
                }
              },
              // {
              //   label: 'Bán SIM/Viettel',
              //   icon: 'pi pi-fw pi-circle-on',
              // },
              {
                label: 'Bán hàng trả góp',
                icon: 'pi pi-fw pi-circle-on',
                id: '1047',
                command: (event) => {
                  this.clickMenuItem(1047);
                }
              },
            ]
          },
          // {
          //   label: 'Bán hàng đặt trước',
          //   items: [
          //     {
          //       label: 'Tạo yêu cầu đặt trước',
          //       icon: 'pi pi-fw pi-circle-on',
          //       id: '1546',
          //       command: (event) => {
          //         this.clickMenuItem(1546);
          //       }
          //     },
          //   ]
          // },
          // {
          //   label: 'Subsidy',
          //   items: [
          //     {
          //       label: 'Subsidy - Siêu thị',
          //       icon: 'pi pi-fw pi-circle-on',
          //       id: '1169',
          //       command: (event) => {
          //         this.clickMenuItem(1169);
          //       }
          //     },
          //     {
          //       label: 'Subsidy Iphone không cọc - Siêu thị',
          //       icon: 'pi pi-fw pi-circle-on',
          //       id: '1383',
          //       command: (event) => {
          //         this.clickMenuItem(1383);
          //       }
          //     },
          //     {
          //       label: 'Subsidy - Bán cho khách đã đặt trước',
          //       icon: 'pi pi-fw pi-circle-on',
          //       id: '1286',
          //       command: (event) => {
          //         this.clickMenuItem(1286);
          //       }
          //     },
          //     {
          //       label: 'Trade in Subsidy - Siêu thị',
          //       icon: 'pi pi-fw pi-circle-on',
          //       id: '1336',
          //       command: (event) => {
          //         this.clickMenuItem(1336);
          //       }
          //     },
          //     {
          //       label: 'Khuyến mãi Subsidy - Siêu thị',
          //       icon: 'pi pi-fw pi-circle-on',
          //       id: '1386',
          //       command: (event) => {
          //         this.clickMenuItem(1386);
          //       }
          //     },
          //     {
          //       label: 'Subsidy - Trả góp mất lãi',
          //       icon: 'pi pi-fw pi-circle-on',
          //       id: '1170',
          //       command: (event) => {
          //         this.clickMenuItem(1170);
          //       }
          //     },
          //     {
          //       label: 'Subsidy - Trả góp không mất lãi',
          //       icon: 'pi pi-fw pi-circle-on',
          //       id: '1171',
          //       command: (event) => {
          //         this.clickMenuItem(1171);
          //       }
          //     },
          //     {
          //       label: 'Subsidy Iphone không cọc - Trả góp mất lãi',
          //       icon: 'pi pi-fw pi-circle-on',
          //       id: '1384',
          //       command: (event) => {
          //         this.clickMenuItem(1384);
          //       }
          //     },
          //     {
          //       label: 'Subsidy Iphone không cọc - Trả góp không mất lãi',
          //       icon: 'pi pi-fw pi-circle-on',
          //       id: '1385',
          //       command: (event) => {
          //         this.clickMenuItem(1385);
          //       }
          //     },
          //     {
          //       label: 'Subsidy - Trả góp mất lãi cho khách hàng đã đặt trước',
          //       icon: 'pi pi-fw pi-circle-on',
          //       id: '1296',
          //       command: (event) => {
          //         this.clickMenuItem(1296);
          //       }
          //     },
          //     {
          //       label: 'Subsidy - Trả góp không mất lãi cho khách hàng đã đặt trước',
          //       icon: 'pi pi-fw pi-circle-on',
          //       id: '1297',
          //       command: (event) => {
          //         this.clickMenuItem(1297);
          //       }
          //     },
          //     {
          //       label: 'Trade in Subsidy - Trả góp mất lãi',
          //       icon: 'pi pi-fw pi-circle-on',
          //       id: '1337',
          //       command: (event) => {
          //         this.clickMenuItem(1337);
          //       }
          //     },
          //     {
          //       label: 'Trade in Subsidy - Trả góp không mất lãi',
          //       icon: 'pi pi-fw pi-circle-on',
          //       id: '1338',
          //       command: (event) => {
          //         this.clickMenuItem(1338);
          //       }
          //     },
          //     {
          //       label: 'Trade in Subsidy Iphone không cọc - Trả góp mất lãi',
          //       icon: 'pi pi-fw pi-circle-on',
          //       id: '1387',
          //       command: (event) => {
          //         this.clickMenuItem(1387);
          //       }
          //     },
          //     {
          //       label: 'Trade in Subsidy Iphone không cọc - Trả góp không mất lãi',
          //       icon: 'pi pi-fw pi-circle-on',
          //       id: '1388',
          //       command: (event) => {
          //         this.clickMenuItem(1388);
          //       }
          //     },
          //   ]
          // },
          // {
          //   label: 'Bán hàng Trade in siêu thị',
          // },
        ]
      },
      {
        label: 'Nghiệp vụ thanh toán',
      },
      {
        label: 'Định giá máy cũ',
      },
      {
        label: 'Quản lí coupon',
      },
      {
        label: 'Epay',
        items: [
          {
            label: 'Thanh toán điện tử',
            icon: 'pi pi-fw pi-circle-on',
            id: '1505',
            command: (event) => {
              this.clickMenuItem(1505);
            }
          },
          {
            label: 'Thanh toán điện tử - 1130',
            icon: 'pi pi-fw pi-circle-on',
            id: '1130',
          },
          {
            label: 'Quản lý giao dịch thanh toán điện tử',
            icon: 'pi pi-fw pi-circle-on',
            id: '1568',
            command: (event) => {
              this.clickMenuItem(1568);
            }
          },
        ]
      },
      {
        label: 'Đổi / trả hàng',
      },
      {
        label: 'Quản lý định giá máy cũ',
        id: '184',
        command: (event) => {
          this.clickMenuItem(184);
        }
      },
      {
        label: 'Coupon',
        items: [
          {
            label: 'Kiểm tra thông tin coupon',
            icon: 'pi pi-fw pi-circle-on',
            id: '781',
            command: (event) => {
              this.clickMenuItem(781);
            }
          },
          {
            label: 'Màn hình lật ô coupon',
            icon: 'pi pi-fw pi-circle-on',
            id: '785',
            command: (event) => {
              this.clickMenuItem(785);
            }
          },
          {
            label: 'Quản lý coupon đã phát hành',
            icon: 'pi pi-fw pi-circle-on',
            id: '1026',
            command: (event) => {
              this.clickMenuItem(1026);
            }
          },
        ]
      },
      {
        label: 'Payment',
        items: [
          {
            label: 'Tạo phiếu thu chi',
            id: '208',
            command: (event) => {
              this.clickMenuItem(208);
            }
          },
          {
            label: 'Chi tiền hàng nộp về công ty',
            id: '1436',
            command: (event) => {
              this.clickMenuItem(1436);
            }
          },
          {
            label: 'Quản lý thu chi',
            id: '189',
            command: (event) => {
              this.clickMenuItem(189);
            }
          }
        ]
      },
      {
        label: 'Quản lý yêu cầu nhập đổi/trả hàng',
        id: '598',
        command: (event) => {
          this.clickMenuItem(598);
        }
      },
      {
        label: 'PrintVAT',
        items: [
          {
            label: 'Tạo hóa đơn bán hàng dịch vụ HĐ điện tử khác tháng',
            icon: 'pi pi-fw pi-circle-on',
            id: '1577',
            command: (event) => {
              this.clickMenuItem(1577);
            }
          },
        ]
      },
      {
        label: 'Báo cáo',
        items: [
          {
            label: 'Báo cáo doanh thu theo hình thức thanh toán',
            icon: 'pi pi-fw pi-circle-on',
            id: '1247',
            command: (event) => {
              this.clickMenuItem(1247);
            }
          },
          {
            label: 'Báo cáo khách hàng',
            icon: 'pi pi-fw pi-circle-on',
            id: '191',
            command: (event) => {
              this.clickMenuItem(191);
            }
          },
          {
            label: 'Báo cáo bán hàng',
            icon: 'pi pi-fw pi-circle-on',
            id: '192',
            command: (event) => {
              this.clickMenuItem(192);
            }
          },
          {
            label: 'Báo cáo nhân viên',
            icon: 'pi pi-fw pi-circle-on',
            id: '193',
            command: (event) => {
              this.clickMenuItem(193);
            }
          },
          {
            label: 'Báo cáo đổi trả hàng',
            icon: 'pi pi-fw pi-circle-on',
            id: '194',
            command: (event) => {
              this.clickMenuItem(194);
            }
          },
          {
            label: 'Báo cáo VNPay',
            icon: 'pi pi-fw pi-circle-on',
            id: '195',
            command: (event) => {
              this.clickMenuItem(195);
            }
          },
		      {
            label: 'Báo cáo doanh thu theo sản phẩm',
            icon: 'pi pi-fw pi-circle-on',
            id: '703',
            command: (event) => {
              this.clickMenuItem(703);
            }
          },
          {
            label: 'Tồn kho theo kho',
            icon: 'pi pi-fw pi-circle-on',
            id: '177',
            command: (event) => {
              this.clickMenuItem(177);
            }
          },
          {
            label: 'Thu chi hàng ngày',
            icon: 'pi pi-fw pi-circle-on',
            id: '196',
            command: (event) => {
              this.clickMenuItem(196);
            }
          }
        ]
      },
      {
        label: 'Thông tin khách hàng CRM',
        id: '307',
        command: (event) => {
          this.clickMenuItem(307);
        }
      }
    ];
  }


  clickMenuItem(menu_id: number): void {
    // alert( 'Hello ' + '\nService angular',);
    console.log('clickMenuItem:::', menu_id);
    this.dynamicTabService.setValueMenuCode(menu_id);
  }



}
