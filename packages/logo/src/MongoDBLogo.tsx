import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from '@leafygreen-ui/emotion';
import {
  LogoProps,
  getAccessibleProps,
  SupportedColors,
  SupportedColorsMap,
} from './utils';

/**
 * # MongoDBLogo
 *
 * React Component that displays the MongoDB Logo.
 *
 * ```
 * <MongoDBLogo />
 * ```
 * @param props.color Determines the color of the logo.
 * @param props.height Determines height of the <Logo /> component.
 */
function MongoDBLogo({
  height = 40,
  className,
  color = SupportedColors.GreenDark2,
  role = 'img',
  'aria-label': ariaLabel = 'MongoDB Logo',
  ...rest
}: LogoProps) {
  const fill = SupportedColorsMap[color];

  return (
    <svg
      {...rest}
      {...getAccessibleProps({ 'aria-label': ariaLabel, role })}
      className={cx(
        css`
          width: auto;
          height: ${height}px;
        `,
        className,
      )}
      height={height}
      viewBox="0 0 127 32"
      fill="none"
    >
      <path
        d="M9.49109 3.29488C8.23754 1.82282 7.168 0.327763 6.94949 0.0172507C6.92649 -0.00575022 6.89199 -0.00575022 6.86899 0.0172507C6.65048 0.327763 5.58094 1.82282 4.33889 3.29488C-6.32203 16.8769 6.01795 26.0313 6.01795 26.0313L6.12146 26.1003C6.21346 27.5148 6.44347 29.5504 6.44347 29.5504H6.90349H7.36351C7.36351 29.5504 7.59351 27.5263 7.68552 26.1003L7.78902 26.0198C7.80052 26.0313 20.152 16.8769 9.49109 3.29488ZM6.91499 25.8358C6.91499 25.8358 6.36297 25.3642 6.21346 25.1227V25.0997L6.88049 10.3102C6.88049 10.2642 6.94949 10.2642 6.94949 10.3102L7.61652 25.0997V25.1227C7.46701 25.3642 6.91499 25.8358 6.91499 25.8358Z"
        fill={fill}
      />
      <path
        d="M29.9619 22.8111L24.8442 10.3216L24.8327 10.2871H20.8421V11.1267H21.4861C21.6816 11.1267 21.8656 11.2072 22.0036 11.3452C22.1416 11.4832 22.2106 11.6672 22.2106 11.8627L22.0956 24.4327C22.0956 24.8237 21.7736 25.1457 21.3826 25.1572L20.7271 25.1687V25.9968H24.6142V25.1687L24.2117 25.1572C23.8207 25.1457 23.4987 24.8237 23.4987 24.4327V12.5872L29.0764 25.9852C29.1569 26.1808 29.3409 26.3073 29.5479 26.3073C29.7549 26.3073 29.9389 26.1808 30.0194 25.9852L35.4821 12.8747L35.5626 24.4212C35.5626 24.8237 35.2406 25.1457 34.8381 25.1572H34.4241V25.9852H38.9898V25.1572H38.3687C37.9777 25.1572 37.6557 24.8237 37.6442 24.4327L37.6097 11.8627C37.6097 11.4602 37.9317 11.1382 38.3227 11.1267L38.9898 11.1152V10.2756H35.1026L29.9619 22.8111Z"
        fill={fill}
      />
      <path
        d="M65.7973 24.9617C65.6708 24.8352 65.6018 24.6627 65.6018 24.4557V18.2915C65.6018 17.1184 65.2568 16.1984 64.5668 15.5429C63.8882 14.8873 62.9452 14.5538 61.7722 14.5538C60.1276 14.5538 58.828 15.2209 57.9195 16.5319C57.908 16.5549 57.8735 16.5664 57.839 16.5664C57.8045 16.5664 57.7815 16.5434 57.7815 16.5089L57.356 14.8643H56.643L54.8144 15.9109V16.4859H55.2859C55.5044 16.4859 55.6884 16.5434 55.8149 16.6584C55.9414 16.7734 56.0104 16.9459 56.0104 17.1874V24.4442C56.0104 24.6512 55.9414 24.8237 55.8149 24.9502C55.6884 25.0767 55.5159 25.1457 55.3089 25.1457H54.8489V25.9853H59.0581V25.1457H58.598C58.391 25.1457 58.2185 25.0767 58.092 24.9502C57.9655 24.8237 57.8965 24.6512 57.8965 24.4442V19.66C57.8965 19.0505 58.0345 18.441 58.2875 17.843C58.552 17.2564 58.9431 16.7619 59.4606 16.3824C59.9781 16.0029 60.5991 15.8189 61.3121 15.8189C62.1172 15.8189 62.7267 16.0719 63.1062 16.5779C63.4857 17.0839 63.6812 17.7395 63.6812 18.5215V24.4557C63.6812 24.6627 63.6122 24.8352 63.4857 24.9617C63.3592 25.0882 63.1867 25.1572 62.9797 25.1572H62.5197V25.9968H66.7289V25.1572H66.2688C66.0963 25.1572 65.9238 25.0997 65.7973 24.9617Z"
        fill={fill}
      />
      <path
        d="M104.404 11.2303C103.231 10.6092 101.92 10.2872 100.506 10.2872H94.9854V11.1268H95.5259C95.7329 11.1268 95.9169 11.2073 96.101 11.3913C96.2735 11.5638 96.3655 11.7593 96.3655 11.9663V24.3408C96.3655 24.5478 96.2735 24.7433 96.101 24.9158C95.9284 25.0883 95.7329 25.1803 95.5259 25.1803H94.9854V26.0198H100.506C101.92 26.0198 103.231 25.6978 104.404 25.0768C105.577 24.4558 106.532 23.5357 107.222 22.3627C107.912 21.1897 108.268 19.7751 108.268 18.165C108.268 16.555 107.912 15.1519 107.222 13.9674C106.532 12.7713 105.589 11.8513 104.404 11.2303ZM106.06 18.142C106.06 19.6141 105.796 20.8561 105.278 21.8567C104.761 22.8572 104.071 23.6048 103.22 24.0878C102.369 24.5708 101.426 24.8123 100.414 24.8123H99.2981C99.0911 24.8123 98.9071 24.7318 98.7231 24.5478C98.5506 24.3753 98.4585 24.1798 98.4585 23.9728V12.3113C98.4585 12.1043 98.5391 11.9203 98.7231 11.7363C98.8956 11.5638 99.0911 11.4718 99.2981 11.4718H100.414C101.426 11.4718 102.369 11.7133 103.22 12.1963C104.071 12.6793 104.761 13.4269 105.278 14.4274C105.796 15.4279 106.06 16.67 106.06 18.142Z"
        fill={fill}
      />
      <path
        d="M121.275 18.97C120.769 18.3835 119.792 17.8889 118.642 17.6244C120.229 16.8309 121.045 15.7153 121.045 14.2778C121.045 13.4958 120.838 12.7942 120.424 12.1962C120.01 11.5982 119.424 11.1152 118.676 10.7817C117.929 10.4481 117.055 10.2756 116.066 10.2756H109.867V11.1152H110.362C110.569 11.1152 110.753 11.1957 110.937 11.3797C111.109 11.5522 111.201 11.7477 111.201 11.9547V24.3292C111.201 24.5362 111.109 24.7317 110.937 24.9042C110.764 25.0767 110.569 25.1687 110.362 25.1687H109.821V26.0082H116.549C117.572 26.0082 118.527 25.8357 119.389 25.4907C120.252 25.1457 120.942 24.6397 121.436 23.9727C121.943 23.3056 122.196 22.4891 122.196 21.5461C122.196 20.534 121.885 19.683 121.275 18.97ZM113.57 24.5477C113.398 24.3752 113.306 24.1797 113.306 23.9727V18.418H116.503C117.63 18.418 118.492 18.7055 119.09 19.2805C119.688 19.8555 119.987 20.603 119.987 21.5231C119.987 22.0751 119.849 22.6156 119.596 23.1101C119.332 23.6162 118.941 24.0187 118.412 24.3292C117.894 24.6397 117.25 24.8007 116.503 24.8007H114.145C113.927 24.8122 113.743 24.7317 113.57 24.5477ZM113.306 17.2334V12.2997C113.306 12.0927 113.386 11.9087 113.57 11.7247C113.743 11.5522 113.938 11.4602 114.145 11.4602H115.663C116.756 11.4602 117.561 11.7362 118.067 12.2652C118.573 12.8057 118.826 13.4958 118.826 14.3468C118.826 15.2208 118.584 15.9224 118.113 16.4514C117.641 16.9689 116.928 17.2334 115.985 17.2334H113.306Z"
        fill={fill}
      />
      <path
        d="M49.7542 15.3013C48.8686 14.8183 47.8796 14.5653 46.81 14.5653C45.7405 14.5653 44.74 14.8068 43.8659 15.3013C42.9804 15.7844 42.2789 16.4859 41.7613 17.3714C41.2438 18.257 40.9793 19.292 40.9793 20.442C40.9793 21.5921 41.2438 22.6271 41.7613 23.5127C42.2789 24.3982 42.9804 25.0997 43.8659 25.5827C44.7515 26.0658 45.7405 26.3188 46.81 26.3188C47.8796 26.3188 48.8801 26.0773 49.7542 25.5827C50.6397 25.0997 51.3412 24.3982 51.8587 23.5127C52.3763 22.6271 52.6408 21.5921 52.6408 20.442C52.6408 19.292 52.3763 18.257 51.8587 17.3714C51.3412 16.4744 50.6282 15.7844 49.7542 15.3013ZM50.6052 20.442C50.6052 21.8566 50.2602 23.0066 49.5701 23.8347C48.8916 24.6627 47.9601 25.0882 46.81 25.0882C45.66 25.0882 44.7285 24.6627 44.0499 23.8347C43.3599 23.0066 43.0149 21.8566 43.0149 20.442C43.0149 19.0275 43.3599 17.8774 44.0499 17.0494C44.7285 16.2214 45.66 15.7959 46.81 15.7959C47.9601 15.7959 48.8916 16.2214 49.5701 17.0494C50.2602 17.8774 50.6052 19.016 50.6052 20.442Z"
        fill={fill}
      />
      <path
        d="M90.3392 15.3013C89.4537 14.8183 88.4647 14.5653 87.3951 14.5653C86.3256 14.5653 85.325 14.8068 84.451 15.3013C83.5655 15.7844 82.8639 16.4859 82.3464 17.3714C81.8289 18.257 81.5644 19.292 81.5644 20.442C81.5644 21.5921 81.8289 22.6271 82.3464 23.5127C82.8639 24.3982 83.5655 25.0997 84.451 25.5827C85.3365 26.0658 86.3256 26.3188 87.3951 26.3188C88.4647 26.3188 89.4652 26.0773 90.3392 25.5827C91.2248 25.0997 91.9263 24.3982 92.4438 23.5127C92.9613 22.6271 93.2258 21.5921 93.2258 20.442C93.2258 19.292 92.9613 18.257 92.4438 17.3714C91.9263 16.4744 91.2248 15.7844 90.3392 15.3013ZM91.1903 20.442C91.1903 21.8566 90.8453 23.0066 90.1552 23.8347C89.4767 24.6627 88.5452 25.0882 87.3951 25.0882C86.2451 25.0882 85.3135 24.6627 84.635 23.8347C83.945 23.0066 83.6 21.8566 83.6 20.442C83.6 19.016 83.945 17.8774 84.635 17.0494C85.3135 16.2214 86.2451 15.7959 87.3951 15.7959C88.5452 15.7959 89.4767 16.2214 90.1552 17.0494C90.8453 17.8774 91.1903 19.016 91.1903 20.442Z"
        fill={fill}
      />
      <path
        d="M73.9626 14.5653C73.0426 14.5653 72.203 14.7608 71.444 15.1518C70.685 15.5428 70.087 16.0719 69.6614 16.7504C69.2359 17.4174 69.0174 18.1649 69.0174 18.9585C69.0174 19.6715 69.1784 20.327 69.5119 20.9136C69.834 21.4771 70.271 21.9486 70.823 22.3396L69.1784 24.5707C68.9714 24.8467 68.9484 25.2147 69.0979 25.5137C69.2589 25.8242 69.5579 26.0083 69.903 26.0083H70.3745C69.9145 26.3188 69.5464 26.6868 69.2934 27.1238C68.9944 27.6183 68.8449 28.1358 68.8449 28.6649C68.8449 29.6539 69.2819 30.4704 70.1445 31.08C70.9955 31.6895 72.1915 32 73.6981 32C74.7446 32 75.7452 31.8275 76.6537 31.494C77.5738 31.1605 78.3213 30.6659 78.8733 30.0219C79.4368 29.3779 79.7243 28.5959 79.7243 27.6988C79.7243 26.7558 79.3793 26.0888 78.5743 25.4447C77.8843 24.9042 76.8032 24.6167 75.4577 24.6167H70.8575C70.846 24.6167 70.8345 24.6052 70.8345 24.6052C70.8345 24.6052 70.823 24.5822 70.8345 24.5707L72.0305 22.9606C72.3525 23.1101 72.6516 23.2021 72.9161 23.2596C73.1921 23.3172 73.5026 23.3402 73.8476 23.3402C74.8136 23.3402 75.6877 23.1446 76.4467 22.7536C77.2057 22.3626 77.8153 21.8336 78.2523 21.1551C78.6893 20.488 78.9078 19.7405 78.9078 18.947C78.9078 18.0959 78.4938 16.5434 77.3667 15.7499C77.3667 15.7384 77.3782 15.7384 77.3782 15.7384L79.8508 16.0144V14.8758H75.8947C75.2737 14.6688 74.6181 14.5653 73.9626 14.5653ZM75.3427 21.7646C74.9056 21.9946 74.4341 22.1211 73.9626 22.1211C73.1921 22.1211 72.5136 21.8451 71.9385 21.3046C71.3635 20.7641 71.076 19.9705 71.076 18.9585C71.076 17.9464 71.3635 17.1529 71.9385 16.6124C72.5136 16.0719 73.1921 15.7959 73.9626 15.7959C74.4456 15.7959 74.9056 15.9109 75.3427 16.1524C75.7797 16.3824 76.1362 16.7389 76.4237 17.2104C76.6997 17.6819 76.8492 18.2685 76.8492 18.9585C76.8492 19.66 76.7112 20.2465 76.4237 20.7065C76.1362 21.1781 75.7797 21.5231 75.3427 21.7646ZM72.2145 25.9968H75.3312C76.1937 25.9968 76.7457 26.1693 77.1137 26.5373C77.4817 26.9053 77.6658 27.3998 77.6658 27.9748C77.6658 28.8144 77.3322 29.5044 76.6652 30.0219C75.9982 30.5394 75.1012 30.8039 73.9971 30.8039C73.0311 30.8039 72.226 30.5854 71.6395 30.1714C71.053 29.7574 70.754 29.1249 70.754 28.3198C70.754 27.8138 70.892 27.3423 71.168 26.9283C71.4555 26.5143 71.789 26.2153 72.2145 25.9968Z"
        fill={fill}
      />
      <path
        d="M124.542 25.8588C124.312 25.7323 124.139 25.5483 124.001 25.3298C123.875 25.0998 123.806 24.8582 123.806 24.5937C123.806 24.3292 123.875 24.0762 124.001 23.8577C124.128 23.6277 124.312 23.4552 124.542 23.3287C124.772 23.2022 125.025 23.1332 125.312 23.1332C125.6 23.1332 125.853 23.2022 126.083 23.3287C126.313 23.4552 126.485 23.6392 126.623 23.8577C126.75 24.0877 126.819 24.3292 126.819 24.5937C126.819 24.8582 126.75 25.1113 126.623 25.3298C126.497 25.5598 126.313 25.7323 126.083 25.8588C125.853 25.9853 125.6 26.0543 125.312 26.0543C125.025 26.0543 124.772 25.9853 124.542 25.8588ZM125.956 25.6863C126.152 25.5828 126.29 25.4218 126.405 25.2378C126.508 25.0423 126.566 24.8237 126.566 24.5822C126.566 24.3407 126.508 24.1222 126.405 23.9267C126.301 23.7312 126.152 23.5817 125.956 23.4782C125.761 23.3747 125.554 23.3172 125.312 23.3172C125.071 23.3172 124.864 23.3747 124.668 23.4782C124.473 23.5817 124.335 23.7427 124.22 23.9267C124.116 24.1222 124.059 24.3407 124.059 24.5822C124.059 24.8237 124.116 25.0423 124.22 25.2378C124.323 25.4333 124.473 25.5828 124.668 25.6863C124.864 25.7898 125.071 25.8473 125.312 25.8473C125.554 25.8473 125.761 25.8013 125.956 25.6863ZM124.691 25.2838V25.1803L124.714 25.1688H124.783C124.806 25.1688 124.829 25.1573 124.841 25.1458C124.864 25.1228 124.864 25.1113 124.864 25.0883V24.0187C124.864 23.9957 124.852 23.9727 124.841 23.9612C124.818 23.9382 124.806 23.9382 124.783 23.9382H124.714L124.691 23.9267V23.8232L124.714 23.8117H125.312C125.485 23.8117 125.611 23.8462 125.715 23.9267C125.818 24.0072 125.864 24.1107 125.864 24.2487C125.864 24.3522 125.83 24.4557 125.749 24.5247C125.669 24.6052 125.577 24.6512 125.462 24.6627L125.6 24.7087L125.864 25.1343C125.887 25.1688 125.91 25.1803 125.945 25.1803H126.014L126.025 25.1918V25.2953L126.014 25.3068H125.657L125.634 25.2953L125.266 24.6742H125.174V25.0883C125.174 25.1113 125.186 25.1343 125.197 25.1458C125.22 25.1688 125.232 25.1688 125.255 25.1688H125.324L125.347 25.1803V25.2838L125.324 25.2953H124.714L124.691 25.2838ZM125.266 24.5362C125.358 24.5362 125.439 24.5132 125.485 24.4557C125.531 24.4097 125.565 24.3292 125.565 24.2372C125.565 24.1452 125.542 24.0762 125.496 24.0187C125.45 23.9612 125.381 23.9382 125.301 23.9382H125.255C125.232 23.9382 125.209 23.9497 125.197 23.9612C125.174 23.9842 125.174 23.9957 125.174 24.0187V24.5362H125.266Z"
        fill={fill}
      />
    </svg>
  );
}

MongoDBLogo.displayName = 'MongoDBLogo';

MongoDBLogo.propTypes = {
  height: PropTypes.number,
  color: PropTypes.oneOf(Object.values(SupportedColors)),
};

export default MongoDBLogo;