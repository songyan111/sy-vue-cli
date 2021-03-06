
export const modelRef = reactive({
  username: "",
  password: "",
  randomStr: "",
  imageCode: "",
})

export const rulesRef = reactive({
  username: [
    {
      required: true,
      message: '请输入账号'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码'
    }
  ],
  imageCode: [
    {
      required: true,
      message: '请输入验证码'
    }
  ]
})
